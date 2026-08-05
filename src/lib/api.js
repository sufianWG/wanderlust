export const allDestinations = async() => {
    const res = await fetch('http://localhost:5260/api/destinations');
    const data = res.json();
    return data
}
export const destinationDetail = async(id) => {
    const res = await fetch(`http://localhost:5260/api/destinations/${id}`);
    const data = res.json();
    return data
}