const Character = () => {
  const view = `
  <div class="Characters-inner">
    <article class="Characters-card">
      <img src="imagen" alt="nombre del personaje">
      <h2>Nombre del personaje</h2>
    </article>
    <article class="Characters-card">
      <h3>Episode: <span></span></h3>
      <h3>Status: <span></span></h3>
      <h3>Species: <span></span></h3>
      <h3>Gender: <span></span></h3>
      <h3>Origin: <span></span></h3>
      <h3>Last Location: <span></span></h3>
    </article>
  </div>  
  `;
  return view;
};

export default Character;
