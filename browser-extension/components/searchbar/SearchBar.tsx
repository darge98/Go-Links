import React, {ComponentProps} from "react";

interface SearchBarProps extends ComponentProps<any> {
    className?: string;
    onChange?: (text: string) => void;
}

export const SearchBar = ({className, onChange}: SearchBarProps) => {
    return (
        <form className={"flex items-center " + className}>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-search"/>
                </div>
                <input type="text" id="voice-search"
                       className="text-sm w-full pl-10 pr-16 bg-white
             drop-shadow-lg border-2 px-3 py-3 outline-none rounded-full placeholder-neutral-300 text-neutral-800
             focus:border-1 focus:border-accent-400 focus:ring-0 focus:ring-accent-400 focus:outline-none
             hover:ring-dark-300"
                       onChange={e => onChange(e.target.value)}
                       placeholder="e.g Java, git, Pull Request, ..." />
            </div>
            {/*<button type="submit"*/}
            {/*        className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
            {/*    <i className="fas fa-search"/>*/}
            {/*    /!*Search*!/*/}
            {/*</button>*/}
        </form>
    )
}
