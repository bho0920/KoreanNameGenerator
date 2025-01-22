document.getElementById('nameForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const gender = document.getElementById('gender').value;

  try {
    const response = await fetch(`https://m2ibx8f6dk.execute-api.ap-northeast-2.amazonaws.com/prod/KoreanNameGenerator?gender=${gender}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    document.getElementById('result').innerText = `Your Korean Name: ${data.name}`;
  } catch (error) {
    console.error('Error fetching the name:', error);
    document.getElementById('result').innerText = 'Failed to fetch a Korean name. Please try again later.';
  }
});
