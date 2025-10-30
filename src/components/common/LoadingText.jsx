export const LoadingText = ({value, isLoading, loadingText}) => {
  if (isLoading)
    return (
      <span>
        <i className="fas fa-spin fa-spinner"></i>
        {loadingText ?? ''}
      </span>
    );
  else return value;
};
