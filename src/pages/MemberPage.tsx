import { useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';

const MembersPage = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar/>
            <h2>Danh sách thành viên Club {id}</h2>
            <p>Danh sách các thành viên và thông tin nổi bật</p>            
        </div>
    );
};

export default MembersPage;
