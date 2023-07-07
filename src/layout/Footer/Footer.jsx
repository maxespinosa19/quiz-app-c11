const gitHubUrl = "https://github.com/maxespinosa19/quiz-app-c11"
const getFullYear = new Date().getFullYear()

export default function Footer (){
    return (
        <footer>
            <p>&copy;{getFullYear}
            <br />
            <a href={gitHubUrl} target ="_blank" rel="noreferrer">See Code in Github.com</a>
            </p>
        </footer>
    )
}