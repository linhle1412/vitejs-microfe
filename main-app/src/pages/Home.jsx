import BlogCard from 'app1/BlogCard'
import Button from 'app1/Button'

const HomePage = () => {
    const blogs = [
        {
            id: 1,
            title: 'LoremNisi labore aute incididunt',
            description: 'Aute fugiat est ex et reprehenderit anim mollit dolor non Lorem magna. Esse cupidatat pariatur fugiat eu labore nulla. Laboris pariatur proident in ullamco eu id cillum anim sint minim. Ullamco sunt proident excepteur ipsum elit ullamco fugiat enim.'
        },
        {
            id: 2,
            title: 'LoremNisi labore aute incididunt',
            description: 'Aute fugiat est ex et reprehenderit anim mollit dolor non Lorem magna. Esse cupidatat pariatur fugiat eu labore nulla. Laboris pariatur proident in ullamco eu id cillum anim sint minim. Ullamco sunt proident excepteur ipsum elit ullamco fugiat enim.'
        },
        {
            id: 3,
            title: 'LoremNisi labore aute incididunt',
            description: 'Aute fugiat est ex et reprehenderit anim mollit dolor non Lorem magna. Esse cupidatat pariatur fugiat eu labore nulla. Laboris pariatur proident in ullamco eu id cillum anim sint minim. Ullamco sunt proident excepteur ipsum elit ullamco fugiat enim.'
        },
    ]

    return <>
            <Button />
        {
            blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))
        }
    </>
}

export default HomePage