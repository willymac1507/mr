import { Component } from 'react';

export class SearchBox extends Component {

    render() {
        let onChangeHandler, placeholder, name, id;
        ({ onChangeHandler, placeholder, name, id } = this.props);
        return (
            <>
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
            </>
        );
    }
}