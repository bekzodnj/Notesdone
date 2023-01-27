import { RefObject, forwardRef } from 'react';

type ButtonProps = {
  className?: string;
  buttonName?: string;
};

interface ButtonRef {
  ref: RefObject<HTMLDivElement>;
}

export const Button = forwardRef<HTMLDivElement, ButtonProps>(function Button2(
  props,
  ref
) {
  const onDownload = async () => {
    const divRef = ref as RefObject<HTMLDivElement>;

    if (divRef.current === null) {
      return;
    }
    try {
      // dynamically import html2canvas module
      const toPng = (await import('html-to-image')).toPng;

      // read from source element
      const sourceDivNode = divRef.current as HTMLDivElement;
      const dataUrl = await toPng(sourceDivNode, {
        cacheBust: true,
        backgroundColor: '#fff',
      });

      // create a new link element and download
      const link = document.createElement('a');
      link.download = 'my-image-name.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      onClick={onDownload}
      className='border border-orange-600 rounded-md px-3 py-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer mb-2'
    >
      Download as image
    </button>
  );
});
