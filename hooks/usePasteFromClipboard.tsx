type PasteFn = {
	(): Promise<string>;
}; // Return success

function usePasteFromClipboard(): PasteFn {
	const paste: PasteFn = async () => {
		if (!navigator?.clipboard) {
			console.warn("Clipboard not supported");
		}

		try {
			return await navigator.clipboard.readText();
		} catch (error) {
			console.warn("Copy failed", error);
		}
	};

	return paste;
}

export default usePasteFromClipboard;
