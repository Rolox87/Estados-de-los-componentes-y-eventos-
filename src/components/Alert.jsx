export const Alert = ({ mensaje, status }) => {
  return (
    <div className={`alert alert-${status} w-50 mx-auto`} role="alert">
      {mensaje}
    </div>
  );
};
