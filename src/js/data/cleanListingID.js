export function cleanListingID(listingID) {
  return listingID.replace(/^"+|"+$/g, '');
}
