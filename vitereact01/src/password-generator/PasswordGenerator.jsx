function PasswordGenerator() {
    return (<>
        <div className="min-h-screen" style={{ backgroundColor: "#666" }}>
            <div className="fixed top-10 left-0 right-0 p-4 m-auto max-w-xl bg-gray-200 rounded-md flex flex-col gap-2">
                <div class="flex w-full items-center gap-2 ">
                    <input
                        class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                    />
                    <button
                        type="button"
                        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Copy
                    </button>
                </div>
                <div className="flex w-full items-center gap-6 ">
                    <div className="flex gap-2">
                        <input type="range" id="volume" name="volume" min="0" max="13" />
                        <span>13</span>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="specialChar"/>
                        <label htmlFor="specialChar">Special Character</label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="passNumbers"/>
                        <label htmlFor="passNumbers">Numbers</label>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default PasswordGenerator;