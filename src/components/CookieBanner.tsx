import { Button } from '@mantine/core'

interface CookieBannerProps {
  onAccept: () => void
  onReject: () => void
}

export const CookieBanner = ({ onAccept, onReject }: CookieBannerProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-3 shadow-lg md:p-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-2 text-center md:flex-row md:gap-4 md:px-4 md:text-left">
        <p className="text-xs text-gray-600 sm:text-sm">
          Táto stránka používa cookies na zlepšenie používateľského zážitku a analýzu návštevnosti.
        </p>
        <div className="flex w-full flex-row gap-2 xs:w-auto xs:flex-row sm:gap-3">
          <Button
            className="w-full border-pink-500 text-pink-500 xs:w-auto"
            variant="outline"
            onClick={onReject}
            size="xs"
          >
            Odmietnuť
          </Button>
          <Button className="w-full bg-pink-500 hover:bg-pink-500/80 xs:w-auto" onClick={onAccept} size="xs">
            Prijať
          </Button>
        </div>
      </div>
    </div>
  )
}
