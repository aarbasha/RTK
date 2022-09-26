import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Dropdown, Navbar, DropdownButton, Container, Nav } from 'react-bootstrap';
import "./Navbar.css"
import { useSelector } from 'react-redux';

const NavbarUser = () => {

    const { name } = useSelector(state => state.user.data);

  

    return (
        <Navbar className='navbar' bg="dark" variant="dark" direction="horizontal" gap={3}>
            <Container>
                <Navbar.Brand className='text-danger' href="#">
                    <Link className='logo' to={'/'}> Redux ToolKit</Link>
                </Navbar.Brand>
                {/* ms-auto */}


                <Nav className="">
                    <Nav.Link href="#">
                        <NavLink className={'nav-link  mx-2'} to={'/'}> home</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <NavLink className={'nav-link mx-2'} to={'/about'}> About</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <NavLink className={'nav-link  mx-2'} to={'/counter'}> Counter</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <NavLink className={'nav-link mx-2'} to={'/users'}> users</NavLink>
                    </Nav.Link>

                </Nav>


                <Nav className="ms-auto">
                    <Nav.Link href="#">
                        <NavLink className={'nav-link  mx-2'} to={'/login'}> Login</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <NavLink className={'nav-link mx-2'} to={'/singup'}> SingUP</NavLink>
                    </Nav.Link>


                    <Nav.Link href="#">
                        <DropdownButton id="dropdown-basic-button" title={name}>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>

    )
}

export default NavbarUser