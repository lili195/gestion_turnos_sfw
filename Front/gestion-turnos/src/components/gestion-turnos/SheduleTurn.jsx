const SheduleTurn = ({ serviceInfo }) => {
  return (
    <div className="section">
      <h2>Shedule Section</h2>
      {serviceInfo ? (
        <div>
          <p><strong>Servicio:</strong> {serviceInfo.service}</p>
          <p><strong>Dependiente:</strong> {serviceInfo.dependent}</p>
          <p><strong>Sala:</strong> {serviceInfo.room}</p>
        </div>
      ) : (
        <p>Please select a service to see the details.</p>
      )}
    </div>
  );
};

export default SheduleTurn;
