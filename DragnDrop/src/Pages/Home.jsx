import dog1 from "../assets/skinny-dog.jpg";
import dog2 from "../assets/glass-dog.jpg";
import dog3 from "../assets/german-dog.jpg";
import cat1 from "../assets/cat-1.jpg";
import cat2 from "../assets/cat-2.jpg";
import cat3 from "../assets/cat-3.jpg";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useState, useEffect } from "react";

import "../Styles/Home.css";

const Home = () => {
    const pets = [
        {
            name: "Confused Dog",
            image: dog1,
            tag: "confused dog",
            id: crypto.randomUUID(),
        },
        {
            name: "Lazy Cat",
            image: cat1,
            tag: "lazy cat",
            id: crypto.randomUUID(),
        },
        {
            name: "Barbie Dog",
            image: dog2,
            tag: "barbie dog",
            id: crypto.randomUUID(),
        },
        {
            name: "Hidden Cat",
            image: cat2,
            tag: "Hidden cat",
            id: crypto.randomUUID(),
        },
        {
            name: "Brave Dog",
            image: dog3,
            tag: " Brave dog",
            id: crypto.randomUUID(),
        },
        {
            name: "Brave Cat",
            image: cat3,
            tag: "Brave cat",
            id: crypto.randomUUID(),
        },
    ];
    const [Pets, setPets] = useState(pets);
    const [Loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const handleDragEnd = (res) => {
        if (!res.destination) return;
        const items = Array.from(Pets);
        const [reorderedItem] = items.splice(res.source.index, 1);
        items.splice(res.destination.index, 0, reorderedItem);
        setPets(items);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const filteredPets = Pets.filter((pet) =>
        search.toLowerCase() === ""
            ? true
            : pet.tag.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="header">
                <div className="logo">P E T S</div>
                <div className="search">
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder="Search for pet"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="main">
                {Loading ? (
                    <div className="loader"></div>
                ) : (
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="section-1">
                            {(provided) => (
                                <ul
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="section-1"
                                >
                                    {filteredPets.length === 0 ? (
                                        <p className="error">{`"${search}" not found`}</p>
                                    ) : (
                                        filteredPets.map((pet, index) => (
                                            <Draggable
                                                key={pet.id}
                                                draggableId={pet.id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <li
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="container"
                                                    >
                                                        <div className="image">
                                                            <img
                                                                src={pet.image}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="text">
                                                            <p>{pet.name}</p>
                                                        </div>
                                                    </li>
                                                )}
                                            </Draggable>
                                        ))
                                    )}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                )}
            </div>
        </div>
    );
};

export default Home;
