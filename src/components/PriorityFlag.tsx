interface PriorityFlagProps {
  value: number;
}

const PriorityFlag = (props: PriorityFlagProps) => {
  const getPriorityFlagColor = (priority: number) => {
    if (priority === 1) {
      return "text-blue-500";
    } else if (priority === 2) {
      return "text-amber-500";
    } else if (priority === 3) {
      return "text-red-500";
    }

    return "text-gray-400";
  };

  return (
    <div className={getPriorityFlagColor(props.value)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M2.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.5 0v-2.624l.33-.083A6.044 6.044 0 0 1 8 11c1.29.645 2.77.807 4.17.457l1.48-.37a.462.462 0 0 0 .35-.448V3.56a.438.438 0 0 0-.544-.425l-1.287.322C10.77 3.808 9.291 3.646 8 3a6.045 6.045 0 0 0-4.17-.457l-.34.085A.75.75 0 0 0 2.75 2Z" />
      </svg>
    </div>
  );
};

export default PriorityFlag;
