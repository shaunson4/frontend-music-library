

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
            {props.parentMusic.map((music, index) => {
                return (
                <tr>
                    <td>{music.title}</td>
                    <td>{music.artist}</td>
                    <td>{music.album}</td>
                    <td>{music.release_date}</td>
                    <td>{music.genre}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;