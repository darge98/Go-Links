import type {ComponentProps} from "react";
import type {GoLink} from "~entities/search-response";

interface CardProps extends ComponentProps<any> {
    item: GoLink
}

export const Card = ({item}: CardProps) => {
    return (
        <div className="w-full h-full bg-white py-4 px-6 flex flex-col justify-start
            rounded-lg shadow-md shadow-neutral-200 dark:shadow-dark-500 dark:bg-dark-700">

            <div className="flex flex-row justify-between">
                <label
                    className="text-2xl text-primary-900 font-semibold dark:text-primary-400 uppercase">{item.name}</label>

                <a href={item.redirectUrl} target="_blank"
                   className="bg-primary-900 hover:bg-primary-800 py-2 px-2.5 focus:outline-none rounded-full inline-flex">
                    <i className="fa fa-rocket text-xs leading-lg text-white pr-px pt-px"></i>
                </a>
            </div>

            <p className="my-2 text-neutral-500 line-clamp-3 dark:text-dark-200">{item.description}</p>

            <div className="flex flex-wrap justify-end mt-auto overflow-hidden">
                {
                    item.tags.map((tag) =>
                        <span key={tag}
                              className="bg-accent-100 text-accent-700 text-xs font-semibold mt-1 mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                    )
                }
            </div>
        </div>
    )
}
