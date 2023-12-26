function PostCard({imageUrl = "https://placehold.co/600x400", PostTitle}) {
    
  return (
    <>
      <div className="w-[300px] rounded-md border">
        <img
          src={imageUrl}
          alt="Post Image"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{PostTitle}</h1>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
        </div>
      </div>
    </>
  );
}

export default PostCard;
