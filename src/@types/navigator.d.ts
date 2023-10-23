type Brand = {
  readonly brand: string;
  readonly version: string;
};

type UserAgentData = {
  readonly brands: Brand[];
  readonly mobile: boolean;
  readonly platform: string;
};

interface Navigator {
  userAgentData: UserAgentData;
}