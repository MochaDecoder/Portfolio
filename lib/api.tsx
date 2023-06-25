import * as fs from 'fs';
import matter from 'gray-matter';
export interface WorkType {
  slug: string
  title: string
  image: string
  imageList: Array<string>
  skills: Array<string>
  year: string
  category: string
  description: string
}

export interface Skill {
  title: string
  image: string
  percent: number
  status: string
  category: Array<string>
}

export function getAllPosts() {
  const files = fs.readdirSync('./public/mockup');
  const posts = files
    .map((fileName) => {
      const slug = fileName.replace('.md', '');
      const { frontmatter } = getPostBySlug(slug);
      return {
        slug,
        date: frontmatter.date,
        ...frontmatter,
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string) {
  const fileName = fs.readFileSync(`./public/mockup/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    frontmatter,
    content,
  };
}

export function getAllWork() {
  const data = fs.readFileSync('./public/work/works.json', 'utf-8');
  const jsonData = JSON.parse(data);
  return jsonData.work.sort((work1: WorkType, work2: WorkType) => (work1.year > work2.year ? -1 : 1))
}

export function getWorkBySlug(slug: string): WorkType {
  const data = fs.readFileSync('./public/work/works.json', 'utf-8');
  const jsonData = JSON.parse(data);
  return jsonData.work.filter((work: WorkType) => work.slug === slug)?.at(0)
}

export function getAllSkill() {
  const data = fs.readFileSync('./public/skill/skills.json', 'utf-8');
  const jsonData = JSON.parse(data);
  return jsonData.skill.sort((skill1: Skill, skill2: Skill) => (skill1.percent > skill2.percent ? -1 : 1))
}