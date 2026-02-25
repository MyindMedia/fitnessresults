import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div style={{ textAlign: 'center', padding: '120px 20px', minHeight: '60vh' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Thank You for Your Purchase!</h1>
            <p style={{ marginTop: '20px', fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>
                Your order has been received and is being processed. You will receive an email confirmation shortly.
            </p>
            <Link to="/store" className="btn btn-primary" style={{ marginTop: '40px', display: 'inline-block' }}>
                Continue Shopping
            </Link>
        </div>
    );
};

export default Success;
