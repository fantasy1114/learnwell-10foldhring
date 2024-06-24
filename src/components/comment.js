const Comment = (props) => {
  return (
    <div class="flex gap-2 items-start">
      <img src={props.avatar_url} />
      <div class="grid gap-1">
        <div class="flex gap-2">
          <div class="font-bold">{`${props.creator}`}</div>
          <div>{` • ${props.date}`}</div>
        </div>
        <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-3xl rounded-es-3xl dark:bg-gray-700">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">
              {props.comment}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
