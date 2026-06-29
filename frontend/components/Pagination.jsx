export default function Pagination({
  page,
  totalPages,
  setPage
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        className="button subtle"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <span>Page {page} of {totalPages}</span>

      <button
        className="button subtle"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
