const person = {
  name: 'Primera práctica',
  
  theme: {
    backgroundColor: '',
    color: 'Black'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name} -Recat</h1>
      <img
        className="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9_6iPM7v_NV7ezyHdI-lTE4UZ1yuEoJlq_gVGOEuPw&s"
        alt="Pikachu"
      />
      <ul>
        <li>Desarrollo y Publicación de una Aplicación en React</li>
        <li>Desarrollo de la Aplicación</li>
        <li>Conexión Remota</li>
      </ul>
    </div>
  );
}


