import Button from "../Ui/other/Button"

function Container({ children }) {
    return (
        <div className="italic min-h-dvh">
        <span><Button>Theme</Button></span>
            { children }
        </div>
    )
}

export default Container
