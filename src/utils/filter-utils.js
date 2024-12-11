export function getAvailableTags(useCases) {
  const tags = new Set();
  useCases.forEach(useCase => {
    useCase.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
}

export function getFilteredUseCases(useCases, activeFilters, searchQuery = '') {
  let filtered = useCases;
  
  // Apply tag filters
  if (activeFilters.length > 0) {
    filtered = filtered.filter(useCase => 
      useCase.tags.some(tag => activeFilters.includes(tag))
    );
  }
  
  // Apply search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(useCase => 
      useCase.title.toLowerCase().includes(query) ||
      useCase.description.toLowerCase().includes(query) ||
      useCase.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  return filtered;
}