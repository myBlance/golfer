import type { ReactNode } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const ClubMemberWrapper = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const { id } = useParams();

    // Ví dụ club mà user đã tham gia
    localStorage.setItem('joinedClubs', JSON.stringify([2]));

    const joinedClubs: number[] = JSON.parse(localStorage.getItem('joinedClubs') || '[]');

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if (!joinedClubs.includes(Number(id))) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Bạn chưa tham gia club nào</h2>
                <p>Hãy tham gia club để sử dụng tính năng này.</p>
                <button onClick={() => window.location.href = '/'}>
                    Tham gia club
                </button>
            </div>
        );
    }

    return children;
};

export default ClubMemberWrapper;
