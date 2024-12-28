function BentoBox({ title, content, children }) {
    return(
        <div className="bento-box">
            {title && <h2>{title}</h2>}
            {children ? children : <p>{content}</p>}
        </div>
    )
}
export default BentoBox