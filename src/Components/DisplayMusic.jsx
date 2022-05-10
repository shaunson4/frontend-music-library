

const DisplayMusic = (props) => {
    return ( 
            <table> 
            <thead>
            <tr>
                <th>title</th>
                <th>artist</th>
                <th>album</th>
                <th>release_date</th>
                <th>genre</th>
            </tr>
            </thead>
            <tbody>
            {props.parentMusic.map((songs, index) => {
                return (
                <tr>
                    <td>{songs.title}</td>
                    <td>{songs.artist}</td>
                    <td>{songs.album}</td>
                    <td>{songs.release_date}</td>
                    <td>{songs.genre}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;