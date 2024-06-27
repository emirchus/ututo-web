export function FeatureFreedom() {
  return (
    <div className="absolute flex max-h-[400px] min-h-[400px] w-full flex-col overflow-hidden rounded-lg p-6 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg bg-[#1e1e1e] font-mono text-white">
        <div className="flex items-center bg-[#2d2d2d] px-4 py-2">
          <div className="mr-2 h-3 w-3 rounded-full bg-[#ff605c]" />
          <div className="mr-2 h-3 w-3 rounded-full bg-[#ffbd44]" />
          <div className="mr-2 h-3 w-3 rounded-full bg-[#00ca4e]" />
          <span className="ml-auto text-sm text-[#9e9e9e]">Ututo 11 LTS</span>
        </div>
        <div className="overflow-auto px-4 py-2">
          <div className="text-[#9e9e9e]">
            <span>user@ututo:</span>
            <span className="text-white">~$</span>
            <span className="ml-2 text-[#00ca4e]">sudo</span>
            <span className="ml-2 text-[#00ca4e]">dnf</span>
            <span className="text-white"> install</span>
            <span className="ml-2 text-[#ffbd44]">nodejs</span>
          </div>
          <div className="mt-2">
            <div className="text-[#9e9e9e]">
              Reading package lists... Done
              <br />
              Building dependency tree... Done
              <br />
              Reading state information... Done
              <br />
              The following NEW packages will be installed:
              <br />
              <span className="text-[#ffbd44]">nodejs</span>
              <br />
              0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
              <br />
              Need to get 26.5 MB of archives.
              <br />
              After this operation, 83.9 MB of additional disk space will be used.
              <br />
              Do you want to continue? [Y/n]
            </div>
            <div className="mt-2 text-[#00ca4e]">Y</div>
            <div className="mt-2 text-[#9e9e9e]">
              Get:1 http://archive.ubuntu.com/ubuntu jammy/main amd64 nodejs amd64 16.14.2-1nodesource1 [26.5 MB]
              <br />
              Fetching 26.5 MB of archives...
              <br />
              <div className="mt-2 h-2.5 w-full rounded-full bg-[#2d2d2d]">
                <div className="h-2.5 rounded-full bg-[#00ca4e]" style={{ width: '50%' }} />
              </div>
              50% [Working]
              <br />
              Get:2 http://archive.ubuntu.com/ubuntu jammy/main amd64 nodejs amd64 16.14.2-1nodesource1 [26.5 MB]
              <br />
              Fetching 26.5 MB of archives...
              <br />
              <div className="mt-2 h-2.5 w-full rounded-full bg-[#2d2d2d]">
                <div className="h-2.5 rounded-full bg-[#00ca4e]" style={{ width: '100%' }} />
              </div>
              100% [Working]
              <br />
              Unpacking nodejs (16.14.2-1nodesource1) ...
              <br />
              Setting up nodejs (16.14.2-1nodesource1) ...
              <br />
              Processing triggers for man-db (2.10.2-1) ...
              <br />
              Processing triggers for ca-certificates (20211016~20.04.1) ...
              <br />
              Updating certificates in /etc/ssl/certs...
              <br />
              0 added, 0 removed; done.
              <br />
              Running hooks in /etc/ca-certificates/update.d...
              <br />
              done.
              <br />
              done.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
