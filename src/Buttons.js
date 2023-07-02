function Buttons() {
    let Redirects = {
        Links: ["https://ezlosswm.github.io/ezlos-blog", "https://ezlosswm.github.io/ezlos-blog/posts/automation/makefile/", "https://github.com/EzlosSWM?tab=repositories"],
        SiteNames: ["Official Website", "Latest Blog Post", "Repositories"]
    }

    return (
        <ul className="links">
            {Redirects.Links.map((link, index) => (
            <li key="index">
                <a href={link} rel="noreferrer" target="_blank">{Redirects.SiteNames[index]}</a>
            </li>
            ))}
        </ul>
    )
}

export default Buttons;
