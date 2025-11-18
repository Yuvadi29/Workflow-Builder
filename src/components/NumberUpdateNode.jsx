import { useCallback } from 'react';

function NumberUpdateNode(props) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <div>
        <label htmlFor="number">Number:</label>
        <input id="text" name="number" onChange={onChange} className="nodrag" />
      </div>
    </div>
  );
}

export default NumberUpdateNode;
