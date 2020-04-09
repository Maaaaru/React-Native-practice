#import "BuildConfig.h"

@implementation BuildConfig

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSDictionary *)constantsToExport {
  NSString *env = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"Env"];
  return @{@"ENV": env};
}

@end