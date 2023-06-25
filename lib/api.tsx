import * as fs from 'fs';
import matter from 'gray-matter';
export interface WorkType {
  title: string
  image: string
  year: string
  category: string
  description: string
  [key: string]: string
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
  return jsonData.work;
}