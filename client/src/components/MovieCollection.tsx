import data from "../data/MovieData.json"

const MovieData = data.MovieData;

function MovieList() {
    return (
        <>
            <h3>Movie Collection</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Year</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Edited</th>
                    </tr>
                </thead>
                <tbody>
                    {MovieData.map(m => (
                        <tr>
                            <td>{m.Title}</td>
                            <td>{m.Director}</td>
                            <td>{m.Year}</td>
                            <td>{m.Category}</td>
                            <td>{m.Rating}</td>
                            <td>{m.Edited}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default MovieList;