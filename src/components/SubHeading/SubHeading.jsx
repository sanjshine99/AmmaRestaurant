

export default function SubHeading({ title }) {
  return (
    <div className="mb-4 flex flex-col items-center">
      <p className="text-[23px] font-bold tracking-wide capitalize text-white">
        {title}
      </p>
      <img
        src="/leafe.png"
        alt=""
        width={65}
        height={90}
        className="mt-1 "
      />
    </div>
  );
}
