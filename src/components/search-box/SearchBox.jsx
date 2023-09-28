import './search-box.css';

export const SearchBox = (props) => {

    const { onChangeHandler, placeholder, name, id } = props;
    return (
        <div className={'search'}>
            <div className="mb-6 max-w-xs">
                <label
                    className="block mb-2 uppercase font-bold text-xs text-gray-700"
                    htmlFor="search"
                />

                <input
                    className="border border-gray-400 p-2 w-full rounded-md"
                    type="search"
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>
        </div>
    );
};