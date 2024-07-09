import './Card.css';

import user from './assets/user.jpg'

function Card() {
    return (
        <>
            <div className="card">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam corrupti, excepturi possimus consectetur, voluptatum nam perferendis deserunt odit veniam tenetur quaerat dolorem. Vero nesciunt mollitia, perferendis expedita enim deleniti eaque ullam autem omnis totam.</p>
                <div className="author">
                    <img src={user} alt="Author" />
                    <div className="author_des">
                        <h3>Gladis Lennon</h3>
                        <p>Head of SEO</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
