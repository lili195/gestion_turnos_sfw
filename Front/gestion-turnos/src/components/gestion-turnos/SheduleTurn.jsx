import React, { useState, useEffect } from "react";
import { checkUserShiftByDate, checkShiftAvailability, createShift } from "../../api/ServicesApi";

const SheduleTurn = ({ serviceInfo, userName }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScheduleTurn = async () => {
      const user = userName; // Puedes obtener el usuario de la autenticación o del estado global
      const date = "2024-05-23"; // Fecha quemada
      const time = "2:00 p.m."; // Hora quemada
      const service = serviceInfo.service;
      const dependent = serviceInfo.dependent;
      try {
        // Verificar que el usuario no tenga un turno para esa fecha
        const userTurns = await checkUserShiftByDate(user, date);
        if (userTurns.length > 0) {
          setMessage("You already have a turn for this date.");
          return;
        }

        // Verificar disponibilidad de fecha, hora y dependiente
        const availability = await checkShiftAvailability(date, time, service);
        if (availability) {
          setMessage("The selected time is not available.");
          return;
        }

        // Crear el turno
        const turn = {
          user,
          date,
          time,
          service,
          dependent,
          room: serviceInfo.room,
        };
        await createShift(turn);
        setMessage("Turn scheduled successfully.");
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    };

    if (serviceInfo) {
      handleScheduleTurn();
    }
  }, [serviceInfo, userName]);

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
      {message && <p>{message}</p>}
    </div>
  );
};

export default SheduleTurn;
