import "./CSS/FiltrosPanel.css";

const CATEGORIAS = [
  { value: "todas", label: "Todas" },
  { value: "pintura", label: "Pintura" },
  { value: "fotografia", label: "Fotografía" },
  { value: "digital", label: "Digital" },
];

const RANGOS_PRECIO = [
  { key: "bajo", label: "Hasta $950 USD" },
  { key: "medio", label: "$950 a $1,200 USD" },
  { key: "alto", label: "Más de $1,200 USD" },
];

function FiltrosPanel({
  filtro,
  setFiltro,
  precioRango,
  setPrecioRango,
  precioMin,
  setPrecioMin,
  precioMax,
  setPrecioMax,
  onClose,
}) {
  const limpiar = () => {
    setFiltro("todas");
    setPrecioRango(null);
    setPrecioMin("");
    setPrecioMax("");
  };

  return (
    <div className="filtros-overlay" onClick={onClose}>
      <div className="filtros-panel" onClick={(e) => e.stopPropagation()}>
        <div className="filtros-header">
          <h2>Filtros</h2>
          <button className="filtros-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="filtros-body">
          <div className="filtros-group">
            <h3>Categoría</h3>
            {CATEGORIAS.map((cat) => (
              <label
                key={cat.value}
                className={`filtros-option ${filtro === cat.value ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="categoria"
                  value={cat.value}
                  checked={filtro === cat.value}
                  onChange={() => setFiltro(cat.value)}
                />
                {cat.label}
              </label>
            ))}
          </div>

          <div className="filtros-group">
            <h3>Precio</h3>
            <p className="filtros-hint">
              La obra más barata es $800 USD y la más cara es $1,500 USD
            </p>
            {RANGOS_PRECIO.map((rango) => (
              <label
                key={rango.key}
                className={`filtros-option ${precioRango === rango.key ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="precio"
                  value={rango.key}
                  checked={precioRango === rango.key}
                  onChange={() => {
                    setPrecioRango(rango.key);
                    setPrecioMin("");
                    setPrecioMax("");
                  }}
                />
                {rango.label}
              </label>
            ))}

            <div className="filtros-rango-custom">
              <input
                type="number"
                placeholder="Mínimo"
                value={precioMin}
                min={0}
                onChange={(e) => {
                  setPrecioMin(e.target.value);
                  setPrecioRango(null);
                }}
              />
              <span>—</span>
              <input
                type="number"
                placeholder="Máximo"
                value={precioMax}
                min={0}
                onChange={(e) => {
                  setPrecioMax(e.target.value);
                  setPrecioRango(null);
                }}
              />
            </div>
          </div>
        </div>
        <div className="filtros-footer">
          <button className="filtros-limpiar" onClick={limpiar}>
            Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltrosPanel;
