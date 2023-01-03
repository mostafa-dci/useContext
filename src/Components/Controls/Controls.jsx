import './Controls.css';
import {Form} from 'react-bootstrap';
import { useRef } from 'react';
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

function Controls(props) {
    const { themes, theme, setTheme, setThemes } = useContext(ThemeContext);
    const themeName = useRef();
    const foreground = useRef();
    const background = useRef();
    const handleChange = (e) => {
        setTheme(themes[e.target.value]);
    }

    const createTheme = (e) => {
        e.preventDefault();
        const newTheme = {
            name: themeName.current.value,
            foreground: foreground.current.value,
            background: background.current.value
        }
        setThemes({...themes, [newTheme.name]: newTheme});
        setTheme(newTheme);
    }

  return (
    <div className="Controls">
      <Form.Group controlId="themeSelect">
        <Form.Label>Select Theme</Form.Label>
        <Form.Select size='lg' onChange={handleChange} value={theme.name}>
            {Object.keys(themes).map((key, index) => {
                return(
            <option key={`theme_${index}`} value={themes[key].name}>{themes[key].name}</option>
            )})}
        </Form.Select>
        </Form.Group>
        <hr/>
        <Form.Group controlId="text">
        <Form.Label>Create a New Theme</Form.Label>
        <Form.Control ref={themeName} type="text" placeholder="Enter a theme name" />
        <Form.Label>Set Foreground Color</Form.Label>
        <Form.Control type='color' ref={foreground} />
        <Form.Label>Set Bakground Color</Form.Label>
        <Form.Control type='color' ref={background} />
        <Form.Control onClick={createTheme} type="button" value="Create Theme" />
        </Form.Group>
    </div>
  );
}

export default Controls;