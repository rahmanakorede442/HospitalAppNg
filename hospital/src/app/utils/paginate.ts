export const paginate = (limit: number = 10, page: number = 1) => {
  const current_page = Number(page) || 1;
  const per_page = Number(limit) || 10;

  const skip = (current_page - 1) * per_page;

  return { skip, per_page };
};

export const total_page = (total: number, limit: number) =>
  Math.ceil(total / limit);
