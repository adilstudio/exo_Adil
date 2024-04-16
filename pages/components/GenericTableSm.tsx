interface GenericTableSmProps {
  title?: string;
  data: Record<string, string>;
}

const GenericTableSm: React.FC<GenericTableSmProps> = ({ title, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default GenericTableSm;
