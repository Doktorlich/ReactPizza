import { FC } from "react";
import Category from "./Category/Category";
import { useDispatch } from "react-redux";

const CATEGORIES = [
    { id: 0, title: "Все" },
    { id: 1, title: "Мясные" },
    { id: 2, title: "Вегетарианская" },
    { id: 3, title: "Гриль" },
    { id: 4, title: "Острые" },
    { id: 5, title: "Закрытые" },
];
const Filter = ({ onValueChange, filterValue, setPagCurrent }) => {
    const dispatch = useDispatch();
    const changeCategoryHandler = function (event) {
        dispatch(setPagCurrent("1"));
        if (event.target.hasAttribute("id")) {
            onValueChange(event.target.id);
        }
        return;
    };

    return (
        <>
            <div className="categories">
                <ul className="ul-filter" onClick={changeCategoryHandler}>
                    {CATEGORIES.map(category => (
                        <Category
                            key={category.id}
                            id={category.id}
                            className={filterValue.toString() === category.id.toString() ? "active" : ""}
                            title={category.title}
                            onClick={() => {
                                onValueChange(category.id);
                            }}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Filter;
