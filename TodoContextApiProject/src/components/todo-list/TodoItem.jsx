function TodoItem() {
    return ( <>
    
    <li className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <input
              id="color-white"
              name="color[]"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              value="white"
            />
            <div className="flex gap-2 items-center">

              <label
                htmlFor="color-white"
                className="ml-3 text-sm font-medium text-gray-900"
              >
                White
              </label>
              <div className="w-full md:w-3/3">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="20" width="20" viewBox="0 0 24 24"><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg>
            </button>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="20" width="20" viewBox="0 0 24 24"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z"></path></svg>
            </button>
          </div>
        </li>
    </>);
}

export default TodoItem;