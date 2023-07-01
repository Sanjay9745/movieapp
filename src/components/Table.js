import React from "react";

function Table({ data, setData }) {
  function removeItem(index) {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  }

  function handleDirectorNameChange(e, index) {
    const directorName = e.target.value;

    setData((prevData) => {
      return prevData.map((item, i) => {
        if (i === index) {
          return { ...item, directorName: directorName };
        }
        return item;
      });
    });
  }
  function handleMovieNameChange(e, index) {
    const movieName = e.target.value;

    setData((prevData) => {
      return prevData.map((item, i) => {
        if (i === index) {
          return { ...item, movieName: movieName };
        }
        return item;
      });
    });
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Director</th>
            <th>Movie</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.directorName}
                  onChange={(e) => handleDirectorNameChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.movieName}
                  onChange={(e) => handleMovieNameChange(e, index)}
                />
              </td>
              <td>
                <button onClick={() => removeItem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
