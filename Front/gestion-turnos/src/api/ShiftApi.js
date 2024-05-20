export const createTurn = async (turnData) => {
    const response = await fetch('http://localhost:8080/api/turns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(turnData)
    });
  
    if (!response.ok) {
      throw new Error('Failed to create turn');
    }
  
    return response.json();
  };