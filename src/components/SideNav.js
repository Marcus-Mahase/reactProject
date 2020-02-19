{/*import React from "react"
import "../css/sideNav.css";

class SideNav extends React.Component {
    state = {
        state: {
            showNav: false
        }
    }

    openNavClick = e => {
        e.preventDefault()
        this.openNav()
    }

    closeNavClick = e => {
        e.preventDefault()
        this.closeNav()
    }

    openNav = () => {
        this.setState({
            showNav: true
        })

        document.addEventListener("keydown", this.handleEscKey)
    }
    closeNav = () => {
        this.setState({
            showNav: false
        })

        document.removeEventListener("keydown", this.handleEscKey)
    }

    handleEscKey = e => {
        if (e.key === "Escape") {
            this.closeNav()
        }
    }

    render() {
        const { showNav } = this.state
        let navCoverStyle = { width: showNav ? "100%" : "0" }
        let sideNavStyle = { width: showNav ? "250px" : "0" }

        return (
            <React.Fragment>
                <div style={{ height: "100px" }}>
                    <span onClick={this.openNavClick} className="open-nav">
                        <br />
                        &#9776;

                    </span>
                </div>
                <div
                    onClick={this.navCoverClick}
                    className="nav-cover"
                    style={navCoverStyle}
                />
                <div name="side-nav" className="side-nav" style={sideNavStyle}>
                    <a href="#" onClick={this.closeNavClick} className="close-nav">
                        &times;
                    </a>
                    <a href="#">Browse Products</a>
                    <a href="#">About</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                    <a href="/login">Login</a>
                </div>
            </React.Fragment>
        )
    }
}

export default SideNav
*/}