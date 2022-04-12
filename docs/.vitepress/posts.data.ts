import { readdirSync, statSync, readFileSync } from 'fs'
import { resolve, join } from 'path'
import matter from 'gray-matter'

module.exports = {
    watch: '../posts/**/*.md',
    load(asFeed = false) {
        const postDir = resolve(__dirname, '../posts/')
        return getFiles(postDir)
            .map((file) => getPost(file))
            .sort((a, b) => b.date.time - a.date.time)
    }
}

type Post = {
    title: String,
    href: String,
    date: {
        time: number,
        string: String
    },
    excerpt: String
}

function getFiles (dir = '') {
    let posts: Array<Post> = []
    let files = readdirSync(dir)
    files.forEach(file => {
        let filePath = join(dir, file)
        try {
            const stat = statSync(filePath)
            if (stat.isDirectory()) {
                posts = posts.concat(getFiles(filePath))
            }
            else {
                // Insert only markdown files in the array
                if (filePath.endsWith('.md')) posts.push(filePath)
            }
        } catch (error) {
            console.log(error)
        }

    })
    return posts
}

const cache = new Map()

function getPost (file = '') {
    const timestamp = statSync(file).mtimeMs

    const cached = cache.get(file)
    if (cached && timestamp === cached.timestamp) {
        return cached.post
    }

    const src = readFileSync(file, {encoding: 'utf-8'})
    const { data, excerpt } = matter(src, {excerpt: true})
    const post = {
        title: data.title,
        href: `${file.replace(/\.md$/, '.html')
                .replace(/[/\w-]*(?=\/posts[/\w-]+.html$)/,'')}`,
        date: formatDate(data.date),
        topics: data.topics?.split(","),
        excerpt
    }
    cache.set(file, {timestamp, post})
    return post;
}

function formatDate (date: Date | string) {
    if (!(date instanceof Date)) {
        date = new Date(date)
    }
    date.setUTCHours(12)
    return {
        time: +date,
        string: date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
}
